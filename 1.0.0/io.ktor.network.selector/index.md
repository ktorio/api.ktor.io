---
title: io.ktor.network.selector - 
layout: api
---



## Package io.ktor.network.selector

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-actor-selector-manager/index.html">ActorSelectorManager</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ActorSelectorManager</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-selector-manager-support/index.html"><span class="identifier">SelectorManagerSupport</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/Closeable.html"><span class="identifier">Closeable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

Default CIO selector manager implementation


</td>
</tr>
<tr>
<td markdown="1">

<a href="-interest-suspensions-map/index.html">InterestSuspensionsMap</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">InterestSuspensionsMap</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-select-interest/index.html">SelectInterest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">SelectInterest</span></code></div>

Select interest kind


</td>
</tr>
<tr>
<td markdown="1">

<a href="-selectable/index.html">Selectable</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Selectable</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/Closeable.html"><span class="identifier">Closeable</span></a><span class="symbol">, </span><span class="identifier">DisposableHandle</span></code></div>

A selectable entity with selectable NIO <a href="-selectable/channel.html">channel</a>, <a href="-selectable/interested-ops.html">interestedOps</a> subscriptions


</td>
</tr>
<tr>
<td markdown="1">

<a href="-selector-manager/index.html">SelectorManager</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SelectorManager</span></code></div>

Selector manager is a service that manages NIO selectors and selection threads


</td>
</tr>
<tr>
<td markdown="1">

<a href="-selector-manager-support/index.html">SelectorManagerSupport</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">SelectorManagerSupport</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-selector-manager/index.html"><span class="identifier">SelectorManager</span></a></code></div>

Base class for NIO selector managers


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build-or-close.html">buildOrClose</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">C</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/Closeable.html"><span class="identifier">Closeable</span></a><span class="symbol">, </span><span class="identifier">R</span><span class="symbol">&gt;</span> <a href="-selector-manager/index.html"><span class="identifier">SelectorManager</span></a><span class="symbol">.</span><span class="identifier">buildOrClose</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/create">create</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/channels/spi/SelectorProvider.html"><span class="identifier">SelectorProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="build-or-close.html#C"><span class="identifier">C</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/setup">setup</span><span class="symbol">:</span>&nbsp;<a href="build-or-close.html#C"><span class="identifier">C</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="build-or-close.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="build-or-close.html#R"><span class="identifier">R</span></a></code></div>

Creates a NIO entity via <a href="build-or-close.html#io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/create">create</a> and calls <a href="build-or-close.html#io.ktor.network.selector$buildOrClose(io.ktor.network.selector.SelectorManager, kotlin.Function1((java.nio.channels.spi.SelectorProvider, io.ktor.network.selector.buildOrClose.C)), kotlin.Function1((io.ktor.network.selector.buildOrClose.C, io.ktor.network.selector.buildOrClose.R)))/setup">setup</a> on it. If any exception happens then the entity will be closed
and an exception will be propagated.


</td>
</tr>
</tbody>
</table>
