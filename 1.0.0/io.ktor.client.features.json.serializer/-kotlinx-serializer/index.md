---
title: KotlinxSerializer - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.json.serializer</a> / <a href="./index.html">KotlinxSerializer</a></div>

# KotlinxSerializer

<div class="signature"><code><span class="keyword">class </span><span class="identifier">KotlinxSerializer</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.features.json/-json-serializer/index.html"><span class="identifier">JsonSerializer</span></a></code></div>

A <a href="../../io.ktor.client.features.json/-json-serializer/index.html">JsonSerializer</a> implemented for kotlinx <a href="#">Serializable</a> classes. Since serializers are determined statically, you
must set the mapping for each Serializable class to it's <a href="#">KSerializer</a> manually, using <a href="set-mapper.html">setMapper</a> or <a href="register.html">register</a>.

<pre markdown="1">KotlinxSerializer().apply {
    register&lt;MySerializable&gt;()
}
</pre>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">KotlinxSerializer</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.serializer.KotlinxSerializer$<init>(kotlinx.serialization.json.JSON)/json">json</span><span class="symbol">:</span>&nbsp;<span class="identifier">JSON</span>&nbsp;<span class="symbol">=</span>&nbsp;JSON.plain<span class="symbol">)</span></code></div>

A <a href="../../io.ktor.client.features.json/-json-serializer/index.html">JsonSerializer</a> implemented for kotlinx <a href="#">Serializable</a> classes. Since serializers are determined statically, you
must set the mapping for each Serializable class to it's <a href="#">KSerializer</a> manually, using <a href="set-mapper.html">setMapper</a> or <a href="register.html">register</a>.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="read.html">read</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">read</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.serializer.KotlinxSerializer$read(io.ktor.client.call.TypeInfo, io.ktor.client.response.HttpResponse)/type">type</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.call/-type-info/index.html"><span class="identifier">TypeInfo</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.features.json.serializer.KotlinxSerializer$read(io.ktor.client.call.TypeInfo, io.ktor.client.response.HttpResponse)/response">response</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="register.html">register</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">register</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.serializer.KotlinxSerializer$register(kotlinx.serialization.KSerializer((io.ktor.client.features.json.serializer.KotlinxSerializer.register.T)))/mapper">mapper</span><span class="symbol">:</span>&nbsp;<span class="identifier">KSerializer</span><span class="symbol">&lt;</span><a href="register.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set the mapping from <a href="register.html#T">T</a> to <a href="register.html#io.ktor.client.features.json.serializer.KotlinxSerializer$register(kotlinx.serialization.KSerializer((io.ktor.client.features.json.serializer.KotlinxSerializer.register.T)))/mapper">mapper</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">register</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set the mapping from <a href="register.html#T">T</a> to it's <a href="#">KSerializer</a>. This method only works for non-parameterized types.


</td>
</tr>
<tr>
<td markdown="1">

<a href="set-mapper.html">setMapper</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">setMapper</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.json.serializer.KotlinxSerializer$setMapper(kotlin.reflect.KClass((io.ktor.client.features.json.serializer.KotlinxSerializer.setMapper.T)), kotlinx.serialization.KSerializer((io.ktor.client.features.json.serializer.KotlinxSerializer.setMapper.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="set-mapper.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.json.serializer.KotlinxSerializer$setMapper(kotlin.reflect.KClass((io.ktor.client.features.json.serializer.KotlinxSerializer.setMapper.T)), kotlinx.serialization.KSerializer((io.ktor.client.features.json.serializer.KotlinxSerializer.setMapper.T)))/serializer">serializer</span><span class="symbol">:</span>&nbsp;<span class="identifier">KSerializer</span><span class="symbol">&lt;</span><a href="set-mapper.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set mapping from <a href="set-mapper.html#io.ktor.client.features.json.serializer.KotlinxSerializer$setMapper(kotlin.reflect.KClass((io.ktor.client.features.json.serializer.KotlinxSerializer.setMapper.T)), kotlinx.serialization.KSerializer((io.ktor.client.features.json.serializer.KotlinxSerializer.setMapper.T)))/type">type</a> to generated <a href="#">KSerializer</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="write.html">write</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">write</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.serializer.KotlinxSerializer$write(kotlin.Any)/data">data</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a></code></div>

</td>
</tr>
</tbody>
</table>
