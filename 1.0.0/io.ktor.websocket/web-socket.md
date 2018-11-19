---
title: webSocket - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.websocket</a> / <a href="./web-socket.html">webSocket</a></div>

# webSocket

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocket</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-default-web-socket-server-session.html"><span class="identifier">DefaultWebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind websocket at the current route optionally checking for websocket <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="-web-sockets/index.html">WebSockets</a> feature to be installed first

<a href="../io.ktor.http.cio.websocket/-web-socket-session/incoming.html">DefaultWebSocketSession.incoming</a> will never contain any control frames and no fragmented frames could be found.
Default websocket implementation is handling ping/pongs, timeouts, close frames and reassembling fragmented frames

When a websocket session is created, a <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</a> lambda will be called with websocket session instance on receiver.
Once <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</a> function returns, the websocket termination sequence will be scheduled so you shouldn't use
<a href="../io.ktor.http.cio.websocket/-default-web-socket-session/index.html">DefaultWebSocketSession</a> anymore. However websocket could live for a while until close sequence completed or
a timeout exceeds

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocket</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-default-web-socket-server-session.html"><span class="identifier">DefaultWebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind websocket at the current route + <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/path">path</a> optionally checking for websocket <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="-web-sockets/index.html">WebSockets</a> feature to be installed first

<a href="../io.ktor.http.cio.websocket/-web-socket-session/incoming.html">DefaultWebSocketSession.incoming</a> will never contain any control frames and no fragmented frames could be found.
Default websocket implementation is handling ping/pongs, timeouts, close frames and reassembling fragmented frames

When a websocket session is created, a <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</a> lambda will be called with websocket session instance on receiver.
Once <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</a> function returns, the websocket termination sequence will be scheduled so you shouldn't use
<a href="../io.ktor.http.cio.websocket/-default-web-socket-session/index.html">DefaultWebSocketSession</a> anymore. However websocket could live for a while until close sequence completed or
a timeout exceeds

</div>
