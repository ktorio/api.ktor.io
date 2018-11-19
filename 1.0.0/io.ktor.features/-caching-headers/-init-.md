---
title: CachingHeaders.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">CachingHeaders</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">CachingHeaders</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CachingHeaders$<init>(kotlin.collections.List((kotlin.Function1((io.ktor.http.content.OutgoingContent, io.ktor.http.content.CachingOptions)))))/optionsProviders">optionsProviders</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><span class="symbol">(</span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../io.ktor.http.content/-caching-options/index.html"><span class="identifier">CachingOptions</span></a><span class="symbol">?</span><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Feature that set <a href="../../io.ktor.http.content/-caching-options/index.html">CachingOptions</a> headers for every response.
It invokes <a href="-init-.html#io.ktor.features.CachingHeaders$<init>(kotlin.collections.List((kotlin.Function1((io.ktor.http.content.OutgoingContent, io.ktor.http.content.CachingOptions)))))/optionsProviders">optionsProviders</a> for every response and use first non null caching options

