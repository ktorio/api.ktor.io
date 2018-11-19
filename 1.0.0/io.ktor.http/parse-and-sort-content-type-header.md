---
title: parseAndSortContentTypeHeader - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http</a> / <a href="./parse-and-sort-content-type-header.html">parseAndSortContentTypeHeader</a></div>

# parseAndSortContentTypeHeader

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseAndSortContentTypeHeader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseAndSortContentTypeHeader(kotlin.String)/header">header</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parse <code>Content-Type</code> header values and sort them by quality and asterisks quantity

