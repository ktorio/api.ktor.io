---
title: suspendAwait - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.netty</a> / <a href="index.html">io.netty.util.concurrent.Future</a> / <a href="./suspend-await.html">suspendAwait</a></div>

# suspendAwait

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">Future</span><span class="symbol">&lt;</span><a href="suspend-await.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">suspendAwait</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="suspend-await.html#T"><span class="identifier">T</span></a></code></div>

Suspend until the future completion.
Resumes with the same exception if the future completes exceptionally

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">Future</span><span class="symbol">&lt;</span><a href="suspend-await.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">suspendAwait</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.netty$suspendAwait(io.netty.util.concurrent.Future((io.ktor.server.netty.suspendAwait.T)), kotlin.Function2((kotlin.Throwable, ((io.ktor.server.netty.suspendAwait.T)), kotlin.Unit)))/exception">exception</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">,</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">&lt;</span><a href="suspend-await.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="suspend-await.html#T"><span class="identifier">T</span></a></code></div>

Suspend until the future completion handling exception from the future using <a href="suspend-await.html#io.ktor.server.netty$suspendAwait(io.netty.util.concurrent.Future((io.ktor.server.netty.suspendAwait.T)), kotlin.Function2((kotlin.Throwable, ((io.ktor.server.netty.suspendAwait.T)), kotlin.Unit)))/exception">exception</a> function

</div>
