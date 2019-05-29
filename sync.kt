#!/usr/bin/env kscript

import java.io.*
import java.nio.file.*

fun main(args: Array<String>) {
    // Get versions
    val versions = getVersions()

    val latestVersion = versions.filter { "alpha" !in it && "dev" !in it }.last()

    // Update assets/versions.js
    run {
        val versionsFile = File("assets/versions.js")
        var versionsText = versionsFile.readText()

        // Update list of all versions
        versionsText = Regex("var versions = (.*);").replace(versionsText) {
            "var versions = [" + versions.joinToString(", ") { "'$it'" } + "];"
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

val ignoredVersions = setOf("dist", "output", "doc-output", "latest")

fun getVersions() : List<String> {
    return File(".").listFiles().filter {
        it.isDirectory && File(it, "alltypes").exists() && it.name !in ignoredVersions
    }.map { it.name }.sorted()
}
