---
title: BaseApplicationResponse.InvalidHeaderForContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.server.engine</a> / <a href="../index.html">BaseApplicationResponse</a> / <a href="./index.html">InvalidHeaderForContent</a></div>

# InvalidHeaderForContent

<div class="signature"><code><span class="keyword">class </span><span class="identifier">InvalidHeaderForContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

<a href="../../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> is trying to set some header that is not allowed for this content type.
For example, only upgrade content can set <code>Upgrade</code> header.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">InvalidHeaderForContent</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse.InvalidHeaderForContent$<init>(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse.InvalidHeaderForContent$<init>(kotlin.String, kotlin.String)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

<a href="../../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> is trying to set some header that is not allowed for this content type.
For example, only upgrade content can set <code>Upgrade</code> header.


</td>
</tr>
</tbody>
</table>
