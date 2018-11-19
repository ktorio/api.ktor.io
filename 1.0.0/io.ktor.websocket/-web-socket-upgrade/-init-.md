---
title: WebSocketUpgrade.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.websocket</a> / <a href="index.html">WebSocketUpgrade</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">WebSocketUpgrade</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket.WebSocketUpgrade$<init>(io.ktor.application.ApplicationCall, kotlin.String, kotlin.SuspendFunction1((io.ktor.http.cio.websocket.WebSocketSession, kotlin.Unit)))/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket.WebSocketUpgrade$<init>(io.ktor.application.ApplicationCall, kotlin.String, kotlin.SuspendFunction1((io.ktor.http.cio.websocket.WebSocketSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket.WebSocketUpgrade$<init>(io.ktor.application.ApplicationCall, kotlin.String, kotlin.SuspendFunction1((io.ktor.http.cio.websocket.WebSocketSession, kotlin.Unit)))/handle">handle</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.http.cio.websocket/-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span></code></div>

An <a href="../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> response object that could be used to <code>respond()</code>: it will cause application engine to
perform HTTP upgrade and start websocket RAW session.

Please note that you generally shouldn't use this object directly but use <a href="../-web-sockets/index.html">WebSockets</a> feature with routing builders
<a href="../web-socket.html">webSocket</a> instead.

<a href="-init-.html#io.ktor.websocket.WebSocketUpgrade$<init>(io.ktor.application.ApplicationCall, kotlin.String, kotlin.SuspendFunction1((io.ktor.http.cio.websocket.WebSocketSession, kotlin.Unit)))/handle">handle</a> function is applied to a session and as far as it is a RAW session, you should handle all low-level
frames yourself and deal with ping/pongs, timeouts, close frames, frame fragmentation and so on.

### Parameters

<code>call</code> - that is starting web socket session

<code>protocol</code> - web socket negotiated protocol name (optional)

<code>handle</code> - function that is started once HTTP upgrade complete and the session will end once this function exit