---
title: Locations.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.locations</a> / <a href="index.html">Locations</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">Locations</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$<init>(io.ktor.application.Application, io.ktor.locations.LocationRouteService)/application">application</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$<init>(io.ktor.application.Application, io.ktor.locations.LocationRouteService)/routeService">routeService</span><span class="symbol">:</span>&nbsp;<a href="../-location-route-service/index.html"><span class="identifier">LocationRouteService</span></a><span class="symbol">)</span></code></div>

**EXPERIMENTAL** Ktor feature that allows to handle and construct routes in a typed way.

You have to create data classes/objects representing parameterized routes and annotate them with <a href="../-location/index.html">Location</a>.
Then you can register sub-routes and handlers for those locations and create links to them
using <a href="href.html">Locations.href</a>.

