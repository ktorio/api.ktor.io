---
title: HttpServer - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.cio</a> / <a href="./index.html">HttpServer</a></div>

# HttpServer

<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpServer</span></code></div>

Represents a server instance

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpServer</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio.HttpServer$<init>(kotlinx.coroutines.Job, kotlinx.coroutines.Job, kotlinx.coroutines.Deferred((io.ktor.network.sockets.ServerSocket)))/rootServerJob">rootServerJob</span><span class="symbol">:</span>&nbsp;<span class="identifier">Job</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio.HttpServer$<init>(kotlinx.coroutines.Job, kotlinx.coroutines.Job, kotlinx.coroutines.Deferred((io.ktor.network.sockets.ServerSocket)))/acceptJob">acceptJob</span><span class="symbol">:</span>&nbsp;<span class="identifier">Job</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio.HttpServer$<init>(kotlinx.coroutines.Job, kotlinx.coroutines.Job, kotlinx.coroutines.Deferred((io.ktor.network.sockets.ServerSocket)))/serverSocket">serverSocket</span><span class="symbol">:</span>&nbsp;<span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="../../io.ktor.network.sockets/-server-socket.html"><span class="identifier">ServerSocket</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Represents a server instance


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="accept-job.html">acceptJob</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">acceptJob</span><span class="symbol">: </span><span class="identifier">Job</span></code></div>

client connections accepting job


</td>
</tr>
<tr>
<td markdown="1">

<a href="root-server-job.html">rootServerJob</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">rootServerJob</span><span class="symbol">: </span><span class="identifier">Job</span></code></div>

server job - root for all jobs


</td>
</tr>
<tr>
<td markdown="1">

<a href="server-socket.html">serverSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">serverSocket</span><span class="symbol">: </span><span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="../../io.ktor.network.sockets/-server-socket.html"><span class="identifier">ServerSocket</span></a><span class="symbol">&gt;</span></code></div>

a deferred server socket instance, could be completed with error if it failed to bind


</td>
</tr>
</tbody>
</table>
