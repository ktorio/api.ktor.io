---
title: PathSegmentParameterRouteSelector.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="index.html">PathSegmentParameterRouteSelector</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">PathSegmentParameterRouteSelector</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentParameterRouteSelector$<init>(kotlin.String, kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentParameterRouteSelector$<init>(kotlin.String, kotlin.String, kotlin.String)/prefix">prefix</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentParameterRouteSelector$<init>(kotlin.String, kotlin.String, kotlin.String)/suffix">suffix</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span></code></div>

Evaluates a route against a parameter path segment and captures its value

### Parameters

<code>name</code> - is the name of the parameter to capture values to

<code>prefix</code> - is an optional suffix

<code>suffix</code> - is an optional prefix