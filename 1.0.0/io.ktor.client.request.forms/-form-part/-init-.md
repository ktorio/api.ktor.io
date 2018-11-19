---
title: FormPart.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.request.forms</a> / <a href="index.html">FormPart</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">FormPart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormPart$<init>(kotlin.String, io.ktor.client.request.forms.FormPart.T, io.ktor.http.Headers)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormPart$<init>(kotlin.String, io.ktor.client.request.forms.FormPart.T, io.ktor.http.Headers)/value">value</span><span class="symbol">:</span>&nbsp;<a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormPart$<init>(kotlin.String, io.ktor.client.request.forms.FormPart.T, io.ktor.http.Headers)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Headers.Empty<span class="symbol">)</span></code></div>

Multipart form item. Use it to build form in client.

### Parameters

<code>key</code> - multipart name

<code>value</code> - content, could be <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>, <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-number/index.html">Number</a> or <a href="#">Input</a>

<code>headers</code> - part headers, note that some servers may fail if an unknown header provided