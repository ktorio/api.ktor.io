---
title: Attributes.takeOrNull - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">Attributes</a> / <a href="./take-or-null.html">takeOrNull</a></div>

# takeOrNull

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">takeOrNull</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.Attributes$takeOrNull(io.ktor.util.AttributeKey((io.ktor.util.Attributes.takeOrNull.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="take-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="take-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Removes an attribute with the specified <a href="take-or-null.html#io.ktor.util.Attributes$takeOrNull(io.ktor.util.AttributeKey((io.ktor.util.Attributes.takeOrNull.T)))/key">key</a> and returns its current value, returns <code>null</code> if an attribute doesn't exist

