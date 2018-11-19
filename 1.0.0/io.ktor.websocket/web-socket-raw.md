---
title: webSocketRaw - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.websocket</a> / <a href="./web-socket-raw.html">webSocketRaw</a></div>

# webSocketRaw

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocketRaw</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-web-socket-server-session/index.html"><span class="identifier">WebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind RAW websocket at the current route + <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/path">path</a> optionally checking for websocket <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="-web-sockets/index.html">WebSockets</a> feature to be installed first

Unlike regular (default) <a href="web-socket.html">webSocket</a>, a raw websocket is not handling any ping/pongs, timeouts or close frames.
So <a href="../io.ktor.http.cio.websocket/-web-socket-session/incoming.html">WebSocketSession.incoming</a> channel will contain all low-level control frames and all fragmented frames need
to be reassembled

When a websocket session is created, a <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</a> lambda will be called with websocket session instance on receiver.
Once <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</a> function returns, the websocket connection will be terminated immediately. For RAW websockets
it is important to perform close sequence properly.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocketRaw</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-web-socket-server-session/index.html"><span class="identifier">WebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind RAW websocket at the current route optionally checking for websocket <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="-web-sockets/index.html">WebSockets</a> feature to be installed first

Unlike regular (default) <a href="web-socket.html">webSocket</a>, a raw websocket is not handling any ping/pongs, timeouts or close frames.
So <a href="../io.ktor.http.cio.websocket/-web-socket-session/index.html">WebSocketSession</a>'s incoming channel will contain all low-level control frames and all fragmented frames need
to be reassembled

When a websocket session is created, a <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</a> lambda will be called with websocket session instance on receiver.
Once <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</a> function returns, the websocket connection will be terminated immediately. For RAW websocket
it is important to perform close sequence properly.

</div>
