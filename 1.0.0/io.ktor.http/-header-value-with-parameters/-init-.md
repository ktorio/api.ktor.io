---
title: HeaderValueWithParameters.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="index.html">HeaderValueWithParameters</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">HeaderValueWithParameters</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HeaderValueWithParameters$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HeaderValueWithParameters$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">)</span></code></div>

Represents a header value that consist of <a href="-init-.html#io.ktor.http.HeaderValueWithParameters$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/content">content</a> followed by <a href="-init-.html#io.ktor.http.HeaderValueWithParameters$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/parameters">parameters</a>.
Useful for headers such as <code>Content-Type</code>, <code>Content-Disposition</code> and so on.

