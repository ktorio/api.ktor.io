---
title: AConnectedSocket.remoteAddress - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="index.html">AConnectedSocket</a> / <a href="./remote-address.html">remoteAddress</a></div>

# remoteAddress

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">remoteAddress</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a></code></div>

Remote socket address. Could throw an exception if the peer is not yet connected or already disconnected.

