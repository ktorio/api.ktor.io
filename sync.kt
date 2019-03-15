#!/usr/bin/env kscript

import java.io.*

fun main(args: Array<String>) {
    // Get versions
    val versions = getVersions()

    // Update assets/versions.js
    run {
        val versionsFile = File("assets/versions.js")
        val versionsText = versionsFile.readText()
        val versionsTextMod = Regex("var versions = (.*);").replace(versionsText) {
            "var versions = [" + versions.joinToString(", ") { "'$it'" } + "];"
        }
        println("Updating $versionsFile...")
        versionsFile.writeText(versionsTextMod)
    }


    // Update
    run {
        val lastVersion = versions.filter { "alpha" !in it && "dev" !in it }.last()
        val latestIndexFile = File("latest/index.html")
        val latestIndexText = latestIndexFile.readText()
        val latestIndexTextMod = Regex("\\.\\./([^'\"<]+)").replace(latestIndexText) {
            "../$lastVersion"
        }
        println("Updating $latestIndexFile...")
        latestIndexFile.writeText(latestIndexTextMod)
        //println(latestIndexTextMod)
    }

}

fun getVersions() : List<String> {
    return File(".").listFiles().sorted().flatMap { file ->
        if (File(file, "alltypes").exists() && file.name !in listOf("dist", "output", "doc-output")) {
            listOf(file.name)
        } else {
            listOf()
        }
    }
}
