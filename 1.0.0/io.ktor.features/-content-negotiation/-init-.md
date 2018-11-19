---
title: ContentNegotiation.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">ContentNegotiation</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">ContentNegotiation</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ContentNegotiation$<init>(kotlin.collections.List((io.ktor.features.ContentNegotiation.ConverterRegistration)))/registrations">registrations</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-converter-registration/index.html"><span class="identifier">ConverterRegistration</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

This feature provides automatic content conversion according to Content-Type and Accept headers

See normative documents:

* https://tools.ietf.org/html/rfc7231#section-5.3
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation

### Parameters

<code>registrations</code> - is a list of registered converters for ContentTypes