---
title: SessionTransportCookie.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionTransportCookie</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">SessionTransportCookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/configuration">configuration</span><span class="symbol">:</span>&nbsp;<a href="../-cookie-configuration/index.html"><span class="identifier">CookieConfiguration</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/transformers">transformers</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

SessionTransport that adds a Set-Cookie header and reads Cookie header
for the specified cookie <a href="-init-.html#io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/name">name</a>, and a specific cookie <a href="-init-.html#io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/configuration">configuration</a> after
applying/un-applying the specified transforms defined by <a href="-init-.html#io.ktor.sessions.SessionTransportCookie$<init>(kotlin.String, io.ktor.sessions.CookieConfiguration, kotlin.collections.List((io.ktor.sessions.SessionTransportTransformer)))/transformers">transformers</a>.

