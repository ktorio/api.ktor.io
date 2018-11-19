---
title: statusFile - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.features</a> / <a href="./status-file.html">statusFile</a></div>

# statusFile

<div class="signature"><code><span class="keyword">fun </span><a href="-status-pages/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">statusFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.features$statusFile(io.ktor.features.StatusPages.Configuration, kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.String)/code">code</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$statusFile(io.ktor.features.StatusPages.Configuration, kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.String)/filePattern">filePattern</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register a status page file(s) using <a href="status-file.html#io.ktor.features$statusFile(io.ktor.features.StatusPages.Configuration, kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.String)/filePattern">filePattern</a> for multiple status <a href="status-file.html#io.ktor.features$statusFile(io.ktor.features.StatusPages.Configuration, kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.String)/code">code</a> list

### Parameters

<code>code</code> - vararg list of status codes handled by this configuration

<code>filePattern</code> - path to status file with optional <code>#</code> character(s) that will be replaced with numeric status code