---
title: SessionSerializerReflection.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionSerializerReflection</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">SessionSerializerReflection</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionSerializerReflection$<init>(kotlin.reflect.KClass((io.ktor.sessions.SessionSerializerReflection.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Default reflection-based session serializer that does it via reflection.
Serialized format is textual and optimized for size as it is could be transferred via HTTP headers or cookies

