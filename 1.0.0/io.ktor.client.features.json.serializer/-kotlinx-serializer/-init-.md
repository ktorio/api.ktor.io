---
title: KotlinxSerializer.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.json.serializer</a> / <a href="index.html">KotlinxSerializer</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">KotlinxSerializer</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.json.serializer.KotlinxSerializer$<init>(kotlinx.serialization.json.JSON)/json">json</span><span class="symbol">:</span>&nbsp;<span class="identifier">JSON</span>&nbsp;<span class="symbol">=</span>&nbsp;JSON.plain<span class="symbol">)</span></code></div>

A <a href="../../io.ktor.client.features.json/-json-serializer/index.html">JsonSerializer</a> implemented for kotlinx <a href="#">Serializable</a> classes. Since serializers are determined statically, you
must set the mapping for each Serializable class to it's <a href="#">KSerializer</a> manually, using <a href="set-mapper.html">setMapper</a> or <a href="register.html">register</a>.

<pre markdown="1">KotlinxSerializer().apply {
    register&lt;MySerializable&gt;()
}
</pre>