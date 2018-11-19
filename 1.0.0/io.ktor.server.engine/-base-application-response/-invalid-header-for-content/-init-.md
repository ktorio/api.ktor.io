---
title: BaseApplicationResponse.InvalidHeaderForContent.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.server.engine</a> / <a href="../index.html">BaseApplicationResponse</a> / <a href="index.html">InvalidHeaderForContent</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">InvalidHeaderForContent</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse.InvalidHeaderForContent$<init>(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.server.engine.BaseApplicationResponse.InvalidHeaderForContent$<init>(kotlin.String, kotlin.String)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

<a href="../../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> is trying to set some header that is not allowed for this content type.
For example, only upgrade content can set <code>Upgrade</code> header.

