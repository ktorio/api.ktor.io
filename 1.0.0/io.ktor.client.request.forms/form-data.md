---
title: formData - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.request.forms</a> / <a href="./form-data.html">formData</a></div>

# formData

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">formData</span><span class="symbol">(</span><span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.client.request.forms$formData(kotlin.Array((io.ktor.client.request.forms.FormPart((kotlin.Any)))))/values">values</span><span class="symbol">:</span>&nbsp;<a href="-form-part/index.html"><span class="identifier">FormPart</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span></code></div>

Build multipart form from <a href="form-data.html#io.ktor.client.request.forms$formData(kotlin.Array((io.ktor.client.request.forms.FormPart((kotlin.Any)))))/values">values</a>.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">formData</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request.forms$formData(kotlin.Function1((io.ktor.client.request.forms.FormBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-form-builder/index.html"><span class="identifier">FormBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span></code></div>

Build multipart form using <a href="form-data.html#io.ktor.client.request.forms$formData(kotlin.Function1((io.ktor.client.request.forms.FormBuilder, kotlin.Unit)))/block">block</a> function

</div>
