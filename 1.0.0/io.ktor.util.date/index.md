---
title: io.ktor.util.date - 
layout: api
---



## Package io.ktor.util.date

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-g-m-t-date/index.html">GMTDate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">GMTDate</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-comparable/index.html"><span class="identifier">Comparable</span></a><span class="symbol">&lt;</span><a href="-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">&gt;</span></code></div>

Date in GMT timezone


</td>
</tr>
<tr>
<td markdown="1">

<a href="-month/index.html">Month</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">Month</span></code></div>

Month
<a href="-month/value.html">value</a> is 3 letter shortcut


</td>
</tr>
<tr>
<td markdown="1">

<a href="-week-day/index.html">WeekDay</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">WeekDay</span></code></div>

Day of week
<a href="-week-day/value.html">value</a> is 3 letter shortcut


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="java.time.-instant/index.html">java.time.Instant</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="java.time.-zoned-date-time/index.html">java.time.ZonedDateTime</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-g-m-t-date.html">GMTDate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">fun </span><span class="identifier">GMTDate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.date$GMTDate(kotlin.Long)/timestamp">timestamp</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a></code></div>

Create new gmt date from the <a href="-g-m-t-date.html#io.ktor.util.date$GMTDate(kotlin.Long)/timestamp">timestamp</a>.

<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">fun </span><span class="identifier">GMTDate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.date$GMTDate(kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, io.ktor.util.date.Month, kotlin.Int)/seconds">seconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.date$GMTDate(kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, io.ktor.util.date.Month, kotlin.Int)/minutes">minutes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.date$GMTDate(kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, io.ktor.util.date.Month, kotlin.Int)/hours">hours</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.date$GMTDate(kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, io.ktor.util.date.Month, kotlin.Int)/dayOfMonth">dayOfMonth</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.date$GMTDate(kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, io.ktor.util.date.Month, kotlin.Int)/month">month</span><span class="symbol">:</span>&nbsp;<a href="-month/index.html"><span class="identifier">Month</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.date$GMTDate(kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, io.ktor.util.date.Month, kotlin.Int)/year">year</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a></code></div>

Create an instance of <a href="-g-m-t-date/index.html">GMTDate</a> from the specified date/time components


</td>
</tr>
<tr>
<td markdown="1">

<a href="minus.html">minus</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><a href="-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">.</span><span class="identifier">minus</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.date$minus(io.ktor.util.date.GMTDate, kotlin.Long)/milliseconds">milliseconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a></code></div>

Subtracts the specified number of <a href="minus.html#io.ktor.util.date$minus(io.ktor.util.date.GMTDate, kotlin.Long)/milliseconds">milliseconds</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="plus.html">plus</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><a href="-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">.</span><span class="identifier">plus</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.date$plus(io.ktor.util.date.GMTDate, kotlin.Long)/milliseconds">milliseconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a></code></div>

Adds the specified number of <a href="plus.html#io.ktor.util.date$plus(io.ktor.util.date.GMTDate, kotlin.Long)/milliseconds">milliseconds</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-jvm-date.html">toJvmDate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">.</span><span class="identifier">toJvmDate</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a></code></div>

Convert to <a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html">Date</a>


</td>
</tr>
</tbody>
</table>
