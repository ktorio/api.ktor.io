---
title: io.ktor.util.java.nio.file.Path - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="./index.html">java.nio.file.Path</a></div>

### Extensions for java.nio.file.Path

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="combine-safe.html">combineSafe</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">Path</span><span class="symbol">.</span><span class="identifier">combineSafe</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$combineSafe(java.nio.file.Path, java.nio.file.Path)/relativePath">relativePath</span><span class="symbol">:</span>&nbsp;<span class="identifier">Path</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a></code></div>

Append a <a href="combine-safe.html#io.ktor.util$combineSafe(java.nio.file.Path, java.nio.file.Path)/relativePath">relativePath</a> safely that means that adding any extra <code>..</code> path elements will not let
access anything out of the reference directory (unless you have symbolic or hard links or multiple mount points)


</td>
</tr>
<tr>
<td markdown="1">

<a href="extension.html">extension</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Path</span><span class="symbol">.</span><span class="identifier">extension</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Finds an extension of the given Path


</td>
</tr>
<tr>
<td markdown="1">

<a href="normalize-and-relativize.html">normalizeAndRelativize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">Path</span><span class="symbol">.</span><span class="identifier">normalizeAndRelativize</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Path</span></code></div>

Remove all redundant <code>.</code> and <code>..</code> path elements. Leading <code>..</code> are also considered redundant.


</td>
</tr>
</tbody>
</table>
