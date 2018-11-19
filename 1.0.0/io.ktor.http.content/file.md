---
title: file - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.content</a> / <a href="./file.html">file</a></div>

# file

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">file</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;remotePath<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">file</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, java.io.File)/remotePath">remotePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, java.io.File)/localPath">localPath</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets up routing to serve <a href="file.html#io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/localPath">localPath</a> file as <a href="file.html#io.ktor.http.content$file(io.ktor.routing.Route, kotlin.String, kotlin.String)/remotePath">remotePath</a>

