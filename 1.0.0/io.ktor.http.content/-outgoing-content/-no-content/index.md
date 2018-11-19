---
title: OutgoingContent.NoContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.content</a> / <a href="../index.html">OutgoingContent</a> / <a href="./index.html">NoContent</a></div>

# NoContent

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">NoContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="../index.html">OutgoingContent</a> without a payload

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">NoContent</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Variant of a <a href="../index.html">OutgoingContent</a> without a payload


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">contentLength</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span></code></div>

Specifies content length in bytes for this resource.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">contentType</span><span class="symbol">: </span><a href="../../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Specifies <a href="../../../io.ktor.http/-content-type/index.html">ContentType</a> for this resource.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Headers to set when sending this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../status.html">status</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">status</span><span class="symbol">: </span><a href="../../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span></code></div>

Status code to set when sending this content


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../get-property.html">getProperty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">getProperty</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.OutgoingContent$getProperty(io.ktor.util.AttributeKey((io.ktor.http.content.OutgoingContent.getProperty.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="../get-property.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="../get-property.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Gets an extension property for this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../set-property.html">setProperty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">setProperty</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent$setProperty(io.ktor.util.AttributeKey((io.ktor.http.content.OutgoingContent.setProperty.T)), io.ktor.http.content.OutgoingContent.setProperty.T)/key">key</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="../set-property.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent$setProperty(io.ktor.util.AttributeKey((io.ktor.http.content.OutgoingContent.setProperty.T)), io.ktor.http.content.OutgoingContent.setProperty.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../set-property.html#T"><span class="identifier">T</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets an extension property for this content


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../../io.ktor.client.request/-client-upgrade-content/index.html">ClientUpgradeContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ClientUpgradeContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">NoContent</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.client.utils/-empty-content.html">EmptyContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">EmptyContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">NoContent</span></a></code></div>

Concrete <a href="../index.html">OutgoingContent</a> without a payload.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../-http-status-code-content/index.html">HttpStatusCodeContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpStatusCodeContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">NoContent</span></a></code></div>

Represents a simple status code response with no content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.auth/-unauthorized-response/index.html">UnauthorizedResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnauthorizedResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">NoContent</span></a></code></div>

Response content with <code>401 Unauthorized</code> status code and <code>WWW-Authenticate</code> header of supplied <a href="../../../io.ktor.auth/-unauthorized-response/challenges.html">challenges</a>


</td>
</tr>
</tbody>
</table>
