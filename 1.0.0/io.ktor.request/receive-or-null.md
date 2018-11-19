---
title: receiveOrNull - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.request</a> / <a href="./receive-or-null.html">receiveOrNull</a></div>

# receiveOrNull

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveOrNull</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="receive-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Receives content for this request.

**Return**
instance of <a href="receive-or-null.html#T">T</a> received from this call, or <code>null</code> if content cannot be transformed to the requested type.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveOrNull</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.request$receiveOrNull(io.ktor.application.ApplicationCall, kotlin.reflect.KClass((io.ktor.request.receiveOrNull.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="receive-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="receive-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Receives content for this request.

### Parameters

<code>type</code> - instance of <code>KClass</code> specifying type to be received.

**Return**
instance of <a href="receive-or-null.html#T">T</a> received from this call, or <code>null</code> if content cannot be transformed to the requested type..

</div>
