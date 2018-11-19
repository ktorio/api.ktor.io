---
title: FormBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.request.forms</a> / <a href="./index.html">FormBuilder</a></div>

# FormBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">FormBuilder</span></code></div>

Form builder type used in <a href="../form-data.html">formData</a> builder function

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/value">value</span><span class="symbol">:</span>&nbsp;<a href="append.html#T"><span class="identifier">T</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Headers.Empty<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a pair <a href="append.html#io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/key">key</a>:<a href="append.html#io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/value">value</a> with optional <a href="append.html#io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/headers">headers</a>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">append</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request.forms.FormBuilder$append(io.ktor.client.request.forms.FormPart((io.ktor.client.request.forms.FormBuilder.append.T)))/part">part</span><span class="symbol">:</span>&nbsp;<a href="../-form-part/index.html"><span class="identifier">FormPart</span></a><span class="symbol">&lt;</span><a href="append.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a form <a href="append.html#io.ktor.client.request.forms.FormBuilder$append(io.ktor.client.request.forms.FormPart((io.ktor.client.request.forms.FormBuilder.append.T)))/part">part</a>


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">FormBuilder</span></a><span class="symbol">.</span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Headers.Empty<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/bodyBuilder">bodyBuilder</span><span class="symbol">:</span>&nbsp;<span class="identifier">BytePacketBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a form part with the specified <a href="../append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/key">key</a> using <a href="../append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/bodyBuilder">bodyBuilder</a> for it's body

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">FormBuilder</span></a><span class="symbol">.</span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/filename">filename</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/bodyBuilder">bodyBuilder</span><span class="symbol">:</span>&nbsp;<span class="identifier">BytePacketBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a form part with the specified <a href="../append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/key">key</a> and <a href="../append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/filename">filename</a> using <a href="../append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/bodyBuilder">bodyBuilder</a> for it's body


</td>
</tr>
</tbody>
</table>
