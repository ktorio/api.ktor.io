---
title: receive - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.call</a> / <a href="./receive.html">receive</a></div>

# receive

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">.</span><span class="identifier">receive</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="receive.html#T"><span class="identifier">T</span></a></code></div>

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span><span class="symbol">&gt;</span> <a href="../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">receive</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="receive.html#T"><span class="identifier">T</span></a></code></div>

Tries to receive the payload of the <a href="#">response</a> as an specific type <a href="receive.html#T">T</a>.

### Exceptions

<code>NoTransformationFoundException</code> - If no transformation is found for the type <a href="receive.html#T">T</a>.

<code>DoubleReceiveException</code> - If already called <a href="./receive.md">receive</a>.