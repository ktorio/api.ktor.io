---
title: JsonFeature.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.json</a> / <a href="index.html">JsonFeature</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">JsonFeature</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.JsonFeature$<init>(io.ktor.client.features.json.JsonSerializer)/serializer">serializer</span><span class="symbol">:</span>&nbsp;<a href="../-json-serializer/index.html"><span class="identifier">JsonSerializer</span></a><span class="symbol">)</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> feature that serializes/de-serializes as JSON custom objects
to request and from response bodies using a <a href="-init-.html#io.ktor.client.features.json.JsonFeature$<init>(io.ktor.client.features.json.JsonSerializer)/serializer">serializer</a>.

The default <a href="-init-.html#io.ktor.client.features.json.JsonFeature$<init>(io.ktor.client.features.json.JsonSerializer)/serializer">serializer</a> is <a href="../-gson-serializer/index.html">GsonSerializer</a>.

Note: It will de-serialize the body response if the specified type is a public accessible class
    and the Content-Type is <code>application/json</code>

