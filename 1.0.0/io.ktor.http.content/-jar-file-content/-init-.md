---
title: JarFileContent.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="index.html">JarFileContent</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">JarFileContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.JarFileContent$<init>(java.nio.file.Path, kotlin.String, io.ktor.http.ContentType)/zipFilePath">zipFilePath</span><span class="symbol">:</span>&nbsp;<span class="identifier">Path</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.JarFileContent$<init>(java.nio.file.Path, kotlin.String, io.ktor.http.ContentType)/resourcePath">resourcePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.JarFileContent$<init>(java.nio.file.Path, kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">JarFileContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.JarFileContent$<init>(java.io.File, kotlin.String, io.ktor.http.ContentType)/jarFile">jarFile</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.JarFileContent$<init>(java.io.File, kotlin.String, io.ktor.http.ContentType)/resourcePath">resourcePath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.JarFileContent$<init>(java.io.File, kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span></code></div>

Represents an <a href="../-outgoing-content/index.html">OutgoingContent</a> for a resource inside a Jar file

### Parameters

<code>jarFile</code> - is an instance of <a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html">File</a> representing a Jar

<code>resourcePath</code> - is an instance of a resource inside a Jar file

</div>
