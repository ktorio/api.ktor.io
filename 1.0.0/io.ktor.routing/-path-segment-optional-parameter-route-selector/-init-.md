---
title: PathSegmentOptionalParameterRouteSelector.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="index.html">PathSegmentOptionalParameterRouteSelector</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">PathSegmentOptionalParameterRouteSelector</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentOptionalParameterRouteSelector$<init>(kotlin.String, kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentOptionalParameterRouteSelector$<init>(kotlin.String, kotlin.String, kotlin.String)/prefix">prefix</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentOptionalParameterRouteSelector$<init>(kotlin.String, kotlin.String, kotlin.String)/suffix">suffix</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span></code></div>

Evaluates a route against an optional parameter path segment and captures its value, if any

### Parameters

<code>name</code> - is the name of the parameter to capture values to

<code>prefix</code> - is an optional suffix

<code>suffix</code> - is an optional prefix