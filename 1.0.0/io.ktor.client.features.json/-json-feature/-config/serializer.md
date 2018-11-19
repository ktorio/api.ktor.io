---
title: JsonFeature.Config.serializer - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.client.features.json</a> / <a href="../index.html">JsonFeature</a> / <a href="index.html">Config</a> / <a href="./serializer.html">serializer</a></div>

# serializer

<div class="signature"><code><span class="keyword">var </span><span class="identifier">serializer</span><span class="symbol">: </span><a href="../../-json-serializer/index.html"><span class="identifier">JsonSerializer</span></a><span class="symbol">?</span></code></div>

Serialized that will be used for serializing requests bodies,
and de-serializing response bodies when Content-Type matches <code>application/json</code>.

Default value is <a href="#">defultSerializer</a>

