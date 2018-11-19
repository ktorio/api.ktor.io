---
title: RangesSpecifier.isValid - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="index.html">RangesSpecifier</a> / <a href="./is-valid.html">isValid</a></div>

# isValid

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">isValid</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.RangesSpecifier$isValid(kotlin.Function1((kotlin.String, kotlin.Boolean)))/rangeUnitPredicate">rangeUnitPredicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{ it == RangeUnits.Bytes.unitToken }<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Verify ranges

