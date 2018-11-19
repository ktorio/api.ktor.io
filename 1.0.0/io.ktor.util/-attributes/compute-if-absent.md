---
title: Attributes.computeIfAbsent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">Attributes</a> / <a href="./compute-if-absent.html">computeIfAbsent</a></div>

# computeIfAbsent

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">computeIfAbsent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.Attributes$computeIfAbsent(io.ktor.util.AttributeKey((io.ktor.util.Attributes.computeIfAbsent.T)), kotlin.Function0((io.ktor.util.Attributes.computeIfAbsent.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="compute-if-absent.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.Attributes$computeIfAbsent(io.ktor.util.AttributeKey((io.ktor.util.Attributes.computeIfAbsent.T)), kotlin.Function0((io.ktor.util.Attributes.computeIfAbsent.T)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="compute-if-absent.html#T"><span class="identifier">T</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="compute-if-absent.html#T"><span class="identifier">T</span></a></code></div>

Gets a value of the attribute for the specified <a href="compute-if-absent.html#io.ktor.util.Attributes$computeIfAbsent(io.ktor.util.AttributeKey((io.ktor.util.Attributes.computeIfAbsent.T)), kotlin.Function0((io.ktor.util.Attributes.computeIfAbsent.T)))/key">key</a>, or calls supplied <a href="compute-if-absent.html#io.ktor.util.Attributes$computeIfAbsent(io.ktor.util.AttributeKey((io.ktor.util.Attributes.computeIfAbsent.T)), kotlin.Function0((io.ktor.util.Attributes.computeIfAbsent.T)))/block">block</a> to compute its value

