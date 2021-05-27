import java.io.*
import java.nio.file.*

main()

fun main() {
    // Get versions
    val versions = getVersions()

    val latestVersion = versions.filter { "alpha" !in it && "dev" !in it && "beta" !in it && "rc" !in it }.last()

    // Update assets/versions.js
    run {
        val versionsFile = File("assets/versions.js")
        var versionsText = versionsFile.readText()

        // Update list of all versions
        val visibleVersions = visibleVersions(versions)
        versionsText = Regex("var versions = (.*);").replace(versionsText) {
            "var versions = [" + visibleVersions.joinToString(", ") { "'$it'" } + "];"
        }
        // Update latest version
        versionsText = Regex("var latestVersion = (.*);").replace(versionsText) {
            "var latestVersion = '$latestVersion';"
        }

        println("Updating $versionsFile...")
        versionsFile.writeText(versionsText)
    }

    // Update symlink to latest version
    run {
        File("latest").delete()
        Files.createSymbolicLink(Paths.get("latest"), Paths.get(latestVersion))
        println("Updating latest -> $latestVersion...")
    }


    // update sitemap.xml
    run {
        val sitemapCatalog = buildString {
            append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n")
            append("<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n")
            versions.forEach { version ->
                if (File(version, "sitemap.xml").exists()) {
                    append("  <sitemap>\n")
                    append("    <loc>https://api.ktor.io/$version/sitemap.xml</loc>\n")
                    append("  </sitemap>\n")
                }
            }
            append("</sitemapindex>\n")
        }
        println("Updating sitemap.xml...")
        File("sitemap.xml").writeText(sitemapCatalog)
    }
}

fun getVersions(): List<String> {
    return File(".").listFiles().filter {
        it.isDirectory
                && File(it, "alltypes").exists()
                && it.name !in setOf("dist", "output", "doc-output", "apidoc", "latest")
    }.map { it.name }.sorted()
}

object VersionComparator : Comparator<String> {
    override fun compare(a: String, b: String): Int {
        return compare(extract(a), extract(b))
    }

    private fun compare(a: List<Int>, b: List<Int>): Int {
        for (index in 0 until minOf(a.size, b.size)) {
            val componentCompared = a[index].compareTo(b[index])
            if (componentCompared != 0) {
                return componentCompared
            }
        }

        return b.size.compareTo(a.size)
    }

    private fun extract(version: String): List<Int> {
        return version.split('.', '_', '-').mapNotNull { it.toIntOrNull() ?: when (it) {
                "alpha" -> 0
                "beta" -> 1
                "rc" -> 2
                "rc2" -> 3
                else -> null
            }
        }
    }
}

fun visibleVersions(allVersions: List<String>): List<String> {
    val pattern = "^(\\d+)\\.(\\d+)".toRegex()

    return allVersions
        .groupBy { pattern.find(it)?.value ?: it }
        .mapValues { (_, it) ->
            it.sortedWith(VersionComparator).last()
        }.flatMap { listOf(it.value) }.sortedWith(VersionComparator)
}
