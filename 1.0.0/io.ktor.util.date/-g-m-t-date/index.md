---
title: GMTDate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.date</a> / <a href="./index.html">GMTDate</a></div>

# GMTDate

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">GMTDate</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-comparable/index.html"><span class="identifier">Comparable</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">GMTDate</span></a><span class="symbol">&gt;</span></code></div>

Date in GMT timezone

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="day-of-month.html">dayOfMonth</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">dayOfMonth</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

: day of month from 1 to 31


</td>
</tr>
<tr>
<td markdown="1">

<a href="day-of-week.html">dayOfWeek</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">dayOfWeek</span><span class="symbol">: </span><a href="../-week-day/index.html"><span class="identifier">WeekDay</span></a></code></div>

an instance of the corresponding day of week


</td>
</tr>
<tr>
<td markdown="1">

<a href="day-of-year.html">dayOfYear</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">dayOfYear</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

: day of year from 1 to 366


</td>
</tr>
<tr>
<td markdown="1">

<a href="hours.html">hours</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">hours</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

: hours from 0 to 23


</td>
</tr>
<tr>
<td markdown="1">

<a href="minutes.html">minutes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">minutes</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

: minutes from 0 to 59


</td>
</tr>
<tr>
<td markdown="1">

<a href="month.html">month</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">month</span><span class="symbol">: </span><a href="../-month/index.html"><span class="identifier">Month</span></a></code></div>

an instance of the corresponding month


</td>
</tr>
<tr>
<td markdown="1">

<a href="seconds.html">seconds</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">seconds</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

: seconds from 0 to 60(last is for leap second)


</td>
</tr>
<tr>
<td markdown="1">

<a href="timestamp.html">timestamp</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">timestamp</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

is a number of epoch milliseconds


</td>
</tr>
<tr>
<td markdown="1">

<a href="year.html">year</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">year</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

: year in common era(CE: https://en.wikipedia.org/wiki/Common_Era)


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="compare-to.html">compareTo</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">compareTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.date.GMTDate$compareTo(io.ktor.util.date.GMTDate)/other">other</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">GMTDate</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-s-t-a-r-t.html">START</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">START</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">GMTDate</span></a></code></div>

An instance of <a href="./index.md">GMTDate</a> corresponding to the epoch beginning


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../minus.html">minus</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><a href="./index.md"><span class="identifier">GMTDate</span></a><span class="symbol">.</span><span class="identifier">minus</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.date$minus(io.ktor.util.date.GMTDate, kotlin.Long)/milliseconds">milliseconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">GMTDate</span></a></code></div>

Subtracts the specified number of <a href="../minus.html#io.ktor.util.date$minus(io.ktor.util.date.GMTDate, kotlin.Long)/milliseconds">milliseconds</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../plus.html">plus</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><a href="./index.md"><span class="identifier">GMTDate</span></a><span class="symbol">.</span><span class="identifier">plus</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.date$plus(io.ktor.util.date.GMTDate, kotlin.Long)/milliseconds">milliseconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">GMTDate</span></a></code></div>

Adds the specified number of <a href="../plus.html#io.ktor.util.date$plus(io.ktor.util.date.GMTDate, kotlin.Long)/milliseconds">milliseconds</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/to-http-date.html">toHttpDate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">GMTDate</span></a><span class="symbol">.</span><span class="identifier">toHttpDate</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Convert <a href="./index.md">GMTDate</a> to valid http date <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../to-jvm-date.html">toJvmDate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">GMTDate</span></a><span class="symbol">.</span><span class="identifier">toJvmDate</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a></code></div>

Convert to <a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html">Date</a>


</td>
</tr>
</tbody>
</table>
