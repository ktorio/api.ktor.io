---
title: combineSafe - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">java.io.File</a> / <a href="./combine-safe.html">combineSafe</a></div>

# combineSafe

<div class="signature"><code><span class="keyword">fun </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">.</span><span class="identifier">combineSafe</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$combineSafe(java.io.File, kotlin.String)/relativePath">relativePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">.</span><span class="identifier">combineSafe</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$combineSafe(java.io.File, java.nio.file.Path)/relativePath">relativePath</span><span class="symbol">:</span>&nbsp;<span class="identifier">Path</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a></code></div>

Append a <a href="combine-safe.html#io.ktor.util$combineSafe(java.io.File, kotlin.String)/relativePath">relativePath</a> safely that means that adding any extra <code>..</code> path elements will not let
access anything out of the reference directory (unless you have symbolic or hard links or multiple mount points)

