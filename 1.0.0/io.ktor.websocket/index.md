---
title: io.ktor.websocket - 
layout: api
---



## Package io.ktor.websocket

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-default-web-socket-server-session.html">DefaultWebSocketServerSession</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">DefaultWebSocketServerSession</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.http.cio.websocket/-default-web-socket-session/index.html"><span class="identifier">DefaultWebSocketSession</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-web-socket-server-session/index.html"><span class="identifier">WebSocketServerSession</span></a></code></div>

Represents a server-side web socket session with all default implementations


</td>
</tr>
<tr>
<td markdown="1">

<a href="-web-socket-server-session/index.html">WebSocketServerSession</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">WebSocketServerSession</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.cio.websocket/-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a></code></div>

Represents a server-side web socket session


</td>
</tr>
<tr>
<td markdown="1">

<a href="-web-socket-upgrade/index.html">WebSocketUpgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">WebSocketUpgrade</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/-protocol-upgrade/index.html"><span class="identifier">ProtocolUpgrade</span></a></code></div>

An <a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> response object that could be used to <code>respond()</code>: it will cause application engine to
perform HTTP upgrade and start websocket RAW session.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-web-sockets/index.html">WebSockets</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">WebSockets</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineScope</span></code></div>

WebSockets support feature. It is required to be installed first before binding any websocket endpoints


</td>
</tr>
</tbody>
</table>

### Type Aliases

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-close-reason.html">CloseReason</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">CloseReason</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="../io.ktor.http.cio.websocket/-close-reason/index.html"><span class="identifier">CloseReason</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-frame.html">Frame</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">Frame</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="../io.ktor.http.cio.websocket/-frame/index.html"><span class="identifier">Frame</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-frame-type.html">FrameType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">FrameType</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="../io.ktor.http.cio.websocket/-frame-type/index.html"><span class="identifier">FrameType</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="application.html">application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-web-socket-server-session/index.html"><span class="identifier">WebSocketServerSession</span></a><span class="symbol">.</span><span class="identifier">application</span><span class="symbol">: </span><a href="../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a></code></div>

An application that started this web socket session


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="web-socket.html">webSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocket</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-default-web-socket-server-session.html"><span class="identifier">DefaultWebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind websocket at the current route optionally checking for websocket <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="-web-sockets/index.html">WebSockets</a> feature to be installed first

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocket</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-default-web-socket-server-session.html"><span class="identifier">DefaultWebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind websocket at the current route + <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/path">path</a> optionally checking for websocket <a href="web-socket.html#io.ktor.websocket$webSocket(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.DefaultWebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="-web-sockets/index.html">WebSockets</a> feature to be installed first


</td>
</tr>
<tr>
<td markdown="1">

<a href="web-socket-raw.html">webSocketRaw</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocketRaw</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-web-socket-server-session/index.html"><span class="identifier">WebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind RAW websocket at the current route + <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/path">path</a> optionally checking for websocket <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="-web-sockets/index.html">WebSockets</a> feature to be installed first

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">webSocketRaw</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-web-socket-server-session/index.html"><span class="identifier">WebSocketServerSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Bind RAW websocket at the current route optionally checking for websocket <a href="web-socket-raw.html#io.ktor.websocket$webSocketRaw(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction1((io.ktor.websocket.WebSocketServerSession, kotlin.Unit)))/protocol">protocol</a> (ignored if <code>null</code>)
Requires <a href="-web-sockets/index.html">WebSockets</a> feature to be installed first


</td>
</tr>
</tbody>
</table>
