---
title: JsonSerializer - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.json</a> / <a href="./index.html">JsonSerializer</a></div>

# JsonSerializer

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">JsonSerializer</span></code></div>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="read.html">read</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">read</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.json.JsonSerializer$read(io.ktor.client.call.TypeInfo, io.ktor.client.response.HttpResponse)/type">type</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.call/-type-info/index.html"><span class="identifier">TypeInfo</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.json.JsonSerializer$read(io.ktor.client.call.TypeInfo, io.ktor.client.response.HttpResponse)/response">response</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="write.html">write</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">write</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.JsonSerializer$write(kotlin.Any)/data">data</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-gson-serializer/index.html">GsonSerializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">GsonSerializer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">JsonSerializer</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../-jackson-serializer/index.html">JacksonSerializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JacksonSerializer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">JsonSerializer</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.features.json.serializer/-kotlinx-serializer/index.html">KotlinxSerializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">KotlinxSerializer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">JsonSerializer</span></a></code></div>

A <a href="./index.md">JsonSerializer</a> implemented for kotlinx <a href="#">Serializable</a> classes. Since serializers are determined statically, you
must set the mapping for each Serializable class to it's <a href="#">KSerializer</a> manually, using <a href="../../io.ktor.client.features.json.serializer/-kotlinx-serializer/set-mapper.html">setMapper</a> or <a href="../../io.ktor.client.features.json.serializer/-kotlinx-serializer/register.html">register</a>.


</td>
</tr>
</tbody>
</table>
