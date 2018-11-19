---
title: Selectable - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.selector</a> / <a href="./index.html">Selectable</a></div>

# Selectable

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Selectable</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/Closeable.html"><span class="identifier">Closeable</span></a><span class="symbol">, </span><span class="identifier">DisposableHandle</span></code></div>

A selectable entity with selectable NIO <a href="channel.html">channel</a>, <a href="interested-ops.html">interestedOps</a> subscriptions

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="channel.html">channel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">channel</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/SelectableChannel.html"><span class="identifier">SelectableChannel</span></a></code></div>

associated channel


</td>
</tr>
<tr>
<td markdown="1">

<a href="interested-ops.html">interestedOps</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">interestedOps</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

current interests


</td>
</tr>
<tr>
<td markdown="1">

<a href="suspensions.html">suspensions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">suspensions</span><span class="symbol">: </span><a href="../-interest-suspensions-map/index.html"><span class="identifier">InterestSuspensionsMap</span></a></code></div>

Current selectable suspensions map


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="interest-op.html">interestOp</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">interestOp</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.Selectable$interestOp(io.ktor.network.selector.SelectInterest, kotlin.Boolean)/interest">interest</span><span class="symbol">:</span>&nbsp;<a href="../-select-interest/index.html"><span class="identifier">SelectInterest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.Selectable$interestOp(io.ktor.network.selector.SelectInterest, kotlin.Boolean)/state">state</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Apply <a href="interest-op.html#io.ktor.network.selector.Selectable$interestOp(io.ktor.network.selector.SelectInterest, kotlin.Boolean)/state">state</a> flag of <a href="interest-op.html#io.ktor.network.selector.Selectable$interestOp(io.ktor.network.selector.SelectInterest, kotlin.Boolean)/interest">interest</a> to <a href="interested-ops.html">interestedOps</a>. Notice that is doesn't actually change selection key.


</td>
</tr>
</tbody>
</table>
