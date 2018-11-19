---
title: directorySessionStorage - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.sessions</a> / <a href="./directory-session-storage.html">directorySessionStorage</a></div>

# directorySessionStorage

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">directorySessionStorage</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$directorySessionStorage(java.io.File, kotlin.Boolean)/rootDir">rootDir</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$directorySessionStorage(java.io.File, kotlin.Boolean)/cached">cached</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;true<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-session-storage/index.html"><span class="identifier">SessionStorage</span></a></code></div>

Creates a session storage that serializes them into regular files under the specified <a href="directory-session-storage.html#io.ktor.sessions$directorySessionStorage(java.io.File, kotlin.Boolean)/rootDir">rootDir</a>

