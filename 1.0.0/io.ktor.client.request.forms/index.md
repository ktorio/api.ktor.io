---
title: io.ktor.client.request.forms - 
layout: api
---



## Package io.ktor.client.request.forms

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-form-builder/index.html">FormBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FormBuilder</span></code></div>

Form builder type used in <a href="form-data.html">formData</a> builder function


</td>
</tr>
<tr>
<td markdown="1">

<a href="-form-data-content/index.html">FormDataContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FormDataContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/-byte-array-content/index.html"><span class="identifier">ByteArrayContent</span></a></code></div>

<a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> with <a href="-form-data-content/form-data.html">formData</a> for application/x-www-form-urlencoded formatted request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-form-part/index.html">FormPart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">FormPart</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Multipart form item. Use it to build form in client.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-multi-part-form-data-content/index.html">MultiPartFormDataContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MultiPartFormDataContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/-write-channel-content/index.html"><span class="identifier">WriteChannelContent</span></a></code></div>

<a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> with <a href="#">parts</a> for multipart/form-data formatted request.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-form-builder/index.html"><span class="identifier">FormBuilder</span></a><span class="symbol">.</span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Headers.Empty<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/bodyBuilder">bodyBuilder</span><span class="symbol">:</span>&nbsp;<span class="identifier">BytePacketBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a form part with the specified <a href="append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/key">key</a> using <a href="append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, io.ktor.http.Headers, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/bodyBuilder">bodyBuilder</a> for it's body

<div class="signature"><code><span class="keyword">fun </span><a href="-form-builder/index.html"><span class="identifier">FormBuilder</span></a><span class="symbol">.</span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/filename">filename</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/bodyBuilder">bodyBuilder</span><span class="symbol">:</span>&nbsp;<span class="identifier">BytePacketBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a form part with the specified <a href="append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/key">key</a> and <a href="append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/filename">filename</a> using <a href="append.html#io.ktor.client.request.forms$append(io.ktor.client.request.forms.FormBuilder, kotlin.String, kotlin.String, kotlin.Function1((kotlinx.io.core.BytePacketBuilder, kotlin.Unit)))/bodyBuilder">bodyBuilder</a> for it's body


</td>
</tr>
<tr>
<td markdown="1">

<a href="form-data.html">formData</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">formData</span><span class="symbol">(</span><span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.client.request.forms$formData(kotlin.Array((io.ktor.client.request.forms.FormPart((kotlin.Any)))))/values">values</span><span class="symbol">:</span>&nbsp;<a href="-form-part/index.html"><span class="identifier">FormPart</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span></code></div>

Build multipart form from <a href="form-data.html#io.ktor.client.request.forms$formData(kotlin.Array((io.ktor.client.request.forms.FormPart((kotlin.Any)))))/values">values</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">formData</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request.forms$formData(kotlin.Function1((io.ktor.client.request.forms.FormBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-form-builder/index.html"><span class="identifier">FormBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span></code></div>

Build multipart form using <a href="form-data.html#io.ktor.client.request.forms$formData(kotlin.Function1((io.ktor.client.request.forms.FormBuilder, kotlin.Unit)))/block">block</a> function


</td>
</tr>
<tr>
<td markdown="1">

<a href="submit-form.html">submitForm</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">submitForm</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/formData">formData</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Parameters.Empty<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/encodeInQuery">encodeInQuery</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="submit-form.html#T"><span class="identifier">T</span></a></code></div>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">submitForm</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/scheme">scheme</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"http"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"localhost"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;80<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"/"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/formData">formData</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Parameters.Empty<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/encodeInQuery">encodeInQuery</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="submit-form.html#T"><span class="identifier">T</span></a></code></div>

Submit <a href="submit-form.html#io.ktor.client.request.forms$submitForm(io.ktor.client.HttpClient, io.ktor.http.Parameters, kotlin.Boolean, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/formData">formData</a> request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="submit-form-with-binary-data.html">submitFormWithBinaryData</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">submitFormWithBinaryData</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/formData">formData</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="submit-form-with-binary-data.html#T"><span class="identifier">T</span></a></code></div>

Send <a href="../io.ktor.http/-http-method/-post.html">HttpMethod.Post</a> request with <a href="#">parts</a> encoded in body.
<a href="#">parts</a> encoded using multipart/form-data format.
https://tools.ietf.org/html/rfc2045

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">submitFormWithBinaryData</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/scheme">scheme</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"http"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"localhost"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;80<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"/"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/formData">formData</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="submit-form-with-binary-data.html#T"><span class="identifier">T</span></a></code></div>

Send <a href="../io.ktor.http/-http-method/-post.html">HttpMethod.Post</a> request with <a href="submit-form-with-binary-data.html#io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/formData">formData</a> encoded in body.
<a href="submit-form-with-binary-data.html#io.ktor.client.request.forms$submitFormWithBinaryData(io.ktor.client.HttpClient, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.collections.List((io.ktor.http.content.PartData)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/formData">formData</a> encoded using multipart/form-data format.
https://tools.ietf.org/html/rfc2045


</td>
</tr>
</tbody>
</table>
