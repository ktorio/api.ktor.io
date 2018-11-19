---
title: FormBuilder.append - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.request.forms</a> / <a href="index.html">FormBuilder</a> / <a href="./append.html">append</a></div>

# append

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/value">value</span><span class="symbol">:</span>&nbsp;<a href="append.html#T"><span class="identifier">T</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Headers.Empty<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a pair <a href="append.html#io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/key">key</a>:<a href="append.html#io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/value">value</a> with optional <a href="append.html#io.ktor.client.request.forms.FormBuilder$append(kotlin.String, io.ktor.client.request.forms.FormBuilder.append.T, io.ktor.http.Headers)/headers">headers</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">append</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request.forms.FormBuilder$append(io.ktor.client.request.forms.FormPart((io.ktor.client.request.forms.FormBuilder.append.T)))/part">part</span><span class="symbol">:</span>&nbsp;<a href="../-form-part/index.html"><span class="identifier">FormPart</span></a><span class="symbol">&lt;</span><a href="append.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a form <a href="append.html#io.ktor.client.request.forms.FormBuilder$append(io.ktor.client.request.forms.FormPart((io.ktor.client.request.forms.FormBuilder.append.T)))/part">part</a>

</div>
