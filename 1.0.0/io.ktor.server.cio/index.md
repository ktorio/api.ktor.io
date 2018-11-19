---
title: io.ktor.server.cio - 
layout: api
---



## Package io.ktor.server.cio

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-c-i-o/index.html">CIO</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">CIO</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-application-engine-factory/index.html"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="-c-i-o-application-engine/index.html"><span class="identifier">CIOApplicationEngine</span></a><span class="symbol">,</span>&nbsp;<a href="-c-i-o-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

An <a href="../io.ktor.server.engine/-application-engine-factory/index.html">ApplicationEngineFactory</a> providing a CIO-based <a href="../io.ktor.server.engine/-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-c-i-o-application-engine/index.html">CIOApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CIOApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-base-application-engine/index.html"><span class="identifier">BaseApplicationEngine</span></a></code></div>

Engine that based on CIO backend


</td>
</tr>
<tr>
<td markdown="1">

<a href="-development-engine/index.html">DevelopmentEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><s><span class="identifier">DevelopmentEngine</span></s></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-main/index.html">EngineMain</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">EngineMain</span></code></div>

Default development engine with main function that starts CIO engine using application.conf


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-server/index.html">HttpServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpServer</span></code></div>

Represents a server instance


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-server-settings/index.html">HttpServerSettings</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpServerSettings</span></code></div>

HTTP server connector settings


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="kotlinx.coroutines.-coroutine-scope/index.html">kotlinx.coroutines.CoroutineScope</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="http-server.html">httpServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">httpServer</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(io.ktor.server.cio.HttpServerSettings, kotlinx.coroutines.Job, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/settings">settings</span><span class="symbol">:</span>&nbsp;<a href="-http-server-settings/index.html"><span class="identifier">HttpServerSettings</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(io.ktor.server.cio.HttpServerSettings, kotlinx.coroutines.Job, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/parentJob">parentJob</span><span class="symbol">:</span>&nbsp;<span class="identifier">Job</span><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(io.ktor.server.cio.HttpServerSettings, kotlinx.coroutines.Job, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.cio/-http-request-handler.html"><span class="identifier">HttpRequestHandler</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-server/index.html"><span class="identifier">HttpServer</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">httpServer</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(io.ktor.server.cio.HttpServerSettings, kotlinx.coroutines.Job, , kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/settings">settings</span><span class="symbol">:</span>&nbsp;<a href="-http-server-settings/index.html"><span class="identifier">HttpServerSettings</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(io.ktor.server.cio.HttpServerSettings, kotlinx.coroutines.Job, , kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/parentJob">parentJob</span><span class="symbol">:</span>&nbsp;<span class="identifier">Job</span><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(io.ktor.server.cio.HttpServerSettings, kotlinx.coroutines.Job, , kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/callDispatcher">callDispatcher</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(io.ktor.server.cio.HttpServerSettings, kotlinx.coroutines.Job, , kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.cio/-http-request-handler.html"><span class="identifier">HttpRequestHandler</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-server/index.html"><span class="identifier">HttpServer</span></a></code></div>

</td>
</tr>
</tbody>
</table>
