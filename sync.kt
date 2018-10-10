#!/usr/bin/env kscript

import java.io.*

fun main(args: Array<String>) {
    val versions = getVersions()
    val versionsFile = File("assets/versions.js")
    val versionsText = versionsFile.readText()
    val versionsTextMod = Regex("var versions = (.*);").replace(versionsText) {
        "var versions = [" + versions.joinToString(", ") { "'$it'" } + "];"
    }
    versionsFile.writeText(versionsTextMod)
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
