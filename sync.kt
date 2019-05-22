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

}

val ignoredVersions = setOf("dist", "output", "doc-output", "latest")

fun getVersions() : List<String> {
    return File(".").listFiles().filter {
        it.isDirectory && File(it, "alltypes").exists() && it.name !in ignoredVersions
    }.map { it.name }.sorted()
}
