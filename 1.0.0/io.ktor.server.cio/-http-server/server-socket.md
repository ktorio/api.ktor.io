---
title: HttpServer.serverSocket - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.cio</a> / <a href="index.html">HttpServer</a> / <a href="./server-socket.html">serverSocket</a></div>

# serverSocket

<div class="signature"><code><span class="keyword">val </span><span class="identifier">serverSocket</span><span class="symbol">: </span><span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="../../io.ktor.network.sockets/-server-socket.html"><span class="identifier">ServerSocket</span></a><span class="symbol">&gt;</span></code></div>

a deferred server socket instance, could be completed with error if it failed to bind

### Property

<code>serverSocket</code> - a deferred server socket instance, could be completed with error if it failed to bind