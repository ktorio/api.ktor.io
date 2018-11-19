---
title: WebSockets.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.websocket</a> / <a href="index.html">WebSockets</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">WebSockets</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket.WebSockets$<init>(java.time.Duration, java.time.Duration, kotlin.Long, kotlin.Boolean)/pingInterval">pingInterval</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket.WebSockets$<init>(java.time.Duration, java.time.Duration, kotlin.Long, kotlin.Boolean)/timeout">timeout</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket.WebSockets$<init>(java.time.Duration, java.time.Duration, kotlin.Long, kotlin.Boolean)/maxFrameSize">maxFrameSize</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket.WebSockets$<init>(java.time.Duration, java.time.Duration, kotlin.Long, kotlin.Boolean)/masking">masking</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span></code></div>

WebSockets support feature. It is required to be installed first before binding any websocket endpoints

<pre markdown="1">install(WebSockets)

install(Routing) {
    webSocket("/ws") {
         incoming.consumeForEach { ... }
    }
}
</pre>

### Parameters

<code>pingInterval</code> - duration between pings or <code>null</code> to disable pings

<code>timeout</code> - write/ping timeout after that a connection will be closed

<code>maxFrameSize</code> - maximum frame that could be received or sent

<code>masking</code> - whether masking need to be enabled (useful for security)