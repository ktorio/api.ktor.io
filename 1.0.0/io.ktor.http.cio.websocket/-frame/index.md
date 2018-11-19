---
title: Frame - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="./index.html">Frame</a></div>

# Frame

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">Frame</span></code></div>

A frame received or ready to be sent. It is not reusable and not thread-safe

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-binary/index.html">Binary</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Binary</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents an application level binary frame.
In a RAW web socket session a big text frame could be fragmented
(separated into several text frames so they have <a href="fin.html">fin</a> = false except the last one).
Note that usually there is no need to handle fragments unless you have a RAW web socket session.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-close/index.html">Close</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Close</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents a low-level level close frame. It could be sent to indicate web socket session end.
Usually there is no need to send/handle it unless you have a RAW web socket session.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-ping/index.html">Ping</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Ping</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents a low-level ping frame. Could be sent to test connection (peer should reply with <a href="-pong/index.html">Pong</a>).
Usually there is no need to send/handle it unless you have a RAW web socket session.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-pong/index.html">Pong</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Pong</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents a low-level pong frame. Should be sent in reply to a <a href="-ping/index.html">Ping</a> frame.
Usually there is no need to send/handle it unless you have a RAW web socket session.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-text/index.html">Text</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Text</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents an application level text frame.
In a RAW web socket session a big text frame could be fragmented
(separated into several text frames so they have <a href="fin.html">fin</a> = false except the last one).
Please note that a boundary between fragments could be in the middle of multi-byte (unicode) character
so don't apply String constructor to every fragment but use decoder loop instead of concatenate fragments first.
Note that usually there is no need to handle fragments unless you have a RAW web socket session.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="buffer.html">buffer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">buffer</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a></code></div>
* a frame content or fragment content

</td>
</tr>
<tr>
<td markdown="1">

<a href="disposable-handle.html">disposableHandle</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">disposableHandle</span><span class="symbol">: </span><span class="identifier">DisposableHandle</span></code></div>

could be invoked when the frame is processed


</td>
</tr>
<tr>
<td markdown="1">

<a href="fin.html">fin</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">fin</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

is it final fragment, should be always <code>true</code> for control frames and if no fragmentation is used


</td>
</tr>
<tr>
<td markdown="1">

<a href="frame-type.html">frameType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">frameType</span><span class="symbol">: </span><a href="../-frame-type/index.html"><span class="identifier">FrameType</span></a></code></div>

enum value


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="copy.html">copy</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">copy</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Creates a frame copy


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="by-type.html">byType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byType</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Companion$byType(kotlin.Boolean, io.ktor.http.cio.websocket.FrameType, java.nio.ByteBuffer)/fin">fin</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Companion$byType(kotlin.Boolean, io.ktor.http.cio.websocket.FrameType, java.nio.ByteBuffer)/frameType">frameType</span><span class="symbol">:</span>&nbsp;<a href="../-frame-type/index.html"><span class="identifier">FrameType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Companion$byType(kotlin.Boolean, io.ktor.http.cio.websocket.FrameType, java.nio.ByteBuffer)/buffer">buffer</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Create a particular <a href="./index.md">Frame</a> instance by frame type


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../read-bytes.html">readBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Frame</span></a><span class="symbol">.</span><span class="identifier">readBytes</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Read binary content from a frame. For fragmented frames only returns this fragment.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-binary/index.html">Binary</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Binary</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents an application level binary frame.
In a RAW web socket session a big text frame could be fragmented
(separated into several text frames so they have <a href="fin.html">fin</a> = false except the last one).
Note that usually there is no need to handle fragments unless you have a RAW web socket session.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-close/index.html">Close</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Close</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents a low-level level close frame. It could be sent to indicate web socket session end.
Usually there is no need to send/handle it unless you have a RAW web socket session.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-ping/index.html">Ping</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Ping</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents a low-level ping frame. Could be sent to test connection (peer should reply with <a href="-pong/index.html">Pong</a>).
Usually there is no need to send/handle it unless you have a RAW web socket session.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-pong/index.html">Pong</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Pong</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents a low-level pong frame. Should be sent in reply to a <a href="-ping/index.html">Ping</a> frame.
Usually there is no need to send/handle it unless you have a RAW web socket session.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-text/index.html">Text</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Text</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Frame</span></a></code></div>

Represents an application level text frame.
In a RAW web socket session a big text frame could be fragmented
(separated into several text frames so they have <a href="fin.html">fin</a> = false except the last one).
Please note that a boundary between fragments could be in the middle of multi-byte (unicode) character
so don't apply String constructor to every fragment but use decoder loop instead of concatenate fragments first.
Note that usually there is no need to handle fragments unless you have a RAW web socket session.


</td>
</tr>
</tbody>
</table>
