---
title: RangesSpecifier - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">RangesSpecifier</a></div>

# RangesSpecifier

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">RangesSpecifier</span></code></div>

Range specifier for partial content requests (RFC 2616 sec 14.35.1)

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RangesSpecifier</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.RangesSpecifier$<init>(io.ktor.http.RangeUnits, kotlin.collections.List((io.ktor.http.ContentRange)))/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="../-range-units/index.html"><span class="identifier">RangeUnits</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.RangesSpecifier$<init>(io.ktor.http.RangeUnits, kotlin.collections.List((io.ktor.http.ContentRange)))/ranges">ranges</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-content-range/index.html"><span class="identifier">ContentRange</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">RangesSpecifier</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.RangesSpecifier$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.ContentRange)))/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;RangeUnits.Bytes.unitToken<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.RangesSpecifier$<init>(kotlin.String, kotlin.collections.List((io.ktor.http.ContentRange)))/ranges">ranges</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-content-range/index.html"><span class="identifier">ContentRange</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Range specifier for partial content requests (RFC 2616 sec 14.35.1)


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="ranges.html">ranges</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ranges</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-content-range/index.html"><span class="identifier">ContentRange</span></a><span class="symbol">&gt;</span></code></div>

a list of requested ranges (could be open or closed ranges)


</td>
</tr>
<tr>
<td markdown="1">

<a href="unit.html">unit</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">unit</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

range units, usually bytes


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="is-valid.html">isValid</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">isValid</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.RangesSpecifier$isValid(kotlin.Function1((kotlin.String, kotlin.Boolean)))/rangeUnitPredicate">rangeUnitPredicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{ it == RangeUnits.Bytes.unitToken }<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Verify ranges


</td>
</tr>
<tr>
<td markdown="1">

<a href="merge.html">merge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">merge</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.RangesSpecifier$merge(kotlin.Long, kotlin.Int)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.RangesSpecifier$merge(kotlin.Long, kotlin.Int)/maxRangeCount">maxRangeCount</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;50<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">&gt;</span></code></div>

Resolve and merge all overlapping and neighbours ranges

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">merge</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.RangesSpecifier$merge(kotlin.Long)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">&gt;</span></code></div>

Merges all overlapping and neighbours ranges. Currently gaps collapse is not supported but should be, one day.


</td>
</tr>
<tr>
<td markdown="1">

<a href="merge-to-single.html">mergeToSingle</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">mergeToSingle</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.RangesSpecifier$mergeToSingle(kotlin.Long)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span></code></div>

Merge all ranges into a single absolute long range


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
